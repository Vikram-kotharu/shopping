import Link from "next/link";


const Home = () => {
  return (
    <>
      
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 shadow p-4 bob">
            <div className="d-flex flex-row">
              <h5>T-shirts</h5>
              <img className="img1" src="tshirt.png" alt="tshirt" />
            </div>
            <span className="badge text-bg-danger">50% off!</span>
            <div className="mt-5">
              <Link href={"/shirts"}>
                <button type="button" className="btn btn-success bob2">
                  Buy now!
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 shadow p-4 bob ms-5">
            <div className="d-flex flex-row">
              <h5>Hoodies</h5>
              <img className="img1" src="hoodie.png" alt="tshirt" />
            </div>
            <span className="badge text-bg-danger">50% off!</span>
            <div className="mt-5">
              <Link href={"/hoodies"}>
                <button type="button" className="btn btn-success bob2">
                  Buy now!
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 shadow p-4 bob ms-5">
            <div className="d-flex flex-row">
              <h5>Shirt</h5>
              <img className="img1" src="shirts.png" alt="tshirt" />
            </div>
            <span className="badge text-bg-danger">50% off!</span>
            <div className="mt-5">
              <Link href={"/cups"}>
                <button type="button" className="btn btn-success bob2">
                  Buy now!
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 shadow p-4 bob mt-4">
            <div className="d-flex flex-row">
              <h5>Jeans</h5>
              <img className="img1" src="jeans.png" alt="tshirt" />
            </div>
            <span className="badge text-bg-danger">50% off!</span>
            <div className="mt-5">
              <Link href={"/stickers"}>
                <button type="button" className="btn btn-success bob2">
                  Buy now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
