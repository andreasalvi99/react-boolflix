import Header from "./Header";

export default function Loading() {
  return (
    <>
      <Header />
      <section className="d-flex justify-content-center align-items-center">
        <div className="spinner-grow mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    </>
  );
}
