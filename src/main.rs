extern crate actix_web;
extern crate env_logger;

use actix_web::fs::{NamedFile, StaticFiles};
use actix_web::middleware::Logger;
use actix_web::{server, App, HttpRequest, Result, http::Method};

const BIND_ADDRESS: &str = "127.0.0.1:8080";

fn main() {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    let app = || {
        App::new()
            .middleware(Logger::default())
            .resource("/", |r| r.method(Method::GET).f(index))
            .handler("/static", StaticFiles::new("resources"))
    };
    server::new(app)
        .bind(BIND_ADDRESS)
        .expect(&format!("Could not bind to {}", BIND_ADDRESS))
        .run();
}

fn index(_: HttpRequest) -> Result<NamedFile> {
    Ok(NamedFile::open("resources/index.html")?)
}
