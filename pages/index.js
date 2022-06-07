import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    {/** Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="ryan-ray-profile2.jpeg" alt=""className="img-fluid"/>
            </div>
            <div className="col-md-8">
              <h1>Ryan Ray</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                incidunt cum et eius odio, neque adipisci repellendus eligendi
                temporibus ratione, ipsa sequi, ut maiores laboriosam ea hic
                consectetur illo! Consequuntur.
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default Index;
