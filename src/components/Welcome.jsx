import Header from "./Header";

export default function Welcome() {
  return (
    <>
      <Header />
      <section id="empty-state">
        <div className="container d-flex justify-content-center align-items-center">
          <span className="text-white fs-1">
            Centinaia di migliaia di Film e Serie TV a tua disposizione...
          </span>
        </div>
      </section>
    </>
  );
}
