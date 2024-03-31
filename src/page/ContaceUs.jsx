import { useState } from "react";
import swal from "sweetalert";
const ContaceUs = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [subjuct, SetSubJect] = useState("");
  const [user, SetUser] = useState([]);

  const headlSubmit = (e) => {
    e.preventDefault();
    const addData = { name, email, subjuct };
    if (!name || !email || !subjuct) {
      swal("Please input infomartion!!!!");
    } else {
      swal({
        title: "Thank You !!!",
        text: "",
        icon: "success",
        button: "YES",
      });
    }
    SetUser(addData);
    SetName("");
    SetEmail("");
    SetSubJect("");
  };

  return (
    <div className="container-width contact">
      <img
        src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
        alt=""
      />
      <h1 className="txt-contace">CONTACT US</h1>
      <article className="contact-grid-1x2">
        <div className="contact-box">
          <h2>TALK TO US TODAY</h2>
          <form>
            <input
              value={name}
              onChange={(e) => SetName(e.target.value)}
              type="text"
              placeholder="Input Email......."
            />
            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              placeholder="Input your name....."
            />
            <input
              value={subjuct}
              onChange={(e) => SetSubJect(e.target.value)}
              type="text"
              placeholder="Input Subjuct........"
            />
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              style={{ marginTop: "10px" }}
              placeholder="Comments"
            ></textarea>
          </form>
          <button
            onClick={headlSubmit}
            className="btn-sub"
            // style={{ background: "#004e98" }}
          >
            Submit
          </button>
        </div>
        <div className="contact-box">
          <h2>CONTACT INFO</h2>
          <span className="address-contact">
            <span>
              <address>
                <strong>Address: </strong>
                Building 17, Street 163, Sangkat Olympic, Khan Boeng Keng Kang,
                Phnom Penh
              </address>
            </span>
          </span>
          <span className="socail-media">
            <h2>SOCIAL MEDIA</h2>
            <ul>
              <li>
                FACEBOOK PAGE:
                <a href="">
                  University of Cheasim Kamchaymear(សាកលវិទ្យាល័យ ជាស៊ីម
                  កំចាយមា)
                </a>
              </li>
              <li>
                WEBSITE:
                <a href="">www//https/nock.edu.kh</a>
              </li>
              <li>
                TELEGRAM:
                <a href="">@nuckEduKh</a>
              </li>
            </ul>
          </span>
        </div>
      </article>
    </div>
  );
};

export default ContaceUs;
