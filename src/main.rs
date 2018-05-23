extern crate actix_web;
extern crate env_logger;

use std::path::Path;

use actix_web::fs::{NamedFile, StaticFiles};
use actix_web::middleware::Logger;
use actix_web::{server, App, HttpRequest, Result, http::Method};

const BIND_ADDRESS: &str = "127.0.0.1:8080";
const STATIC_FOLDER: &str = "auth/build";

fn main() {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    let static_path = Path::new(STATIC_FOLDER).join("static");
    let app = move || {
        App::new()
            .middleware(Logger::default())
            .resource("/", |r| r.method(Method::GET).f(index))
            .handler("/static", StaticFiles::new(&static_path))
    };
    server::new(app)
        .bind(BIND_ADDRESS)
        .expect(&format!("Could not bind to {}", BIND_ADDRESS))
        .run();
}

fn index(_: HttpRequest) -> Result<NamedFile> {
    let path = Path::new(STATIC_FOLDER).join("index.html");
    Ok(NamedFile::open(path)?)
}
