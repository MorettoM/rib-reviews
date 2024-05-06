import logo from "./assets/logoribs.jpg";
import "./App.css";
import { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import emailjs from "emailjs-com";
import moment from "moment";

function Reviewer() {
  const [rating, setRating] = useState(0);
  const [writtenReview, setWrittenReview] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  function isAndroid() {
    return /Android/i.test(navigator.userAgent);
  }

  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  const getReviewLink = () => {
    const local = window.location.pathname.split("/")[2];
    switch (local) {
      case "soho":
        return isAndroid() || isIOS()
          ? "https://www.google.com/maps/place/Ribs+al+r%C3%ADo+-+Mercado+Soho/@-34.5888724,-58.4293853,17z/data=!4m8!3m7!1s0x95bcb5ad8bdb9dbf:0xea7675417b3ef210!8m2!3d-34.5888768!4d-58.4268104!9m1!1b1!16s%2Fg%2F11s5wtfkv8?entry=ttu"
          : "https://search.google.com/local/writereview?placeid=ChIJv53bi621vJUREPI-e0F1duo";
      case "infanta":
        return isAndroid() || isIOS()
          ? "https://www.google.com/maps/place/Ribs+al+r%C3%ADo+-+Mercado+Soho/@-34.5888724,-58.4293853,17z/data=!4m8!3m7!1s0x95bcb5ad8bdb9dbf:0xea7675417b3ef210!8m2!3d-34.5888768!4d-58.4268104!9m1!1b1!16s%2Fg%2F11s5wtfkv8?entry=ttu"
          : "https://search.google.com/local/writereview?placeid=ChIJv53bi621vJUREPI-e0F1duo";
      case "costanera":
        return isAndroid() || isIOS()
          ? "https://www.google.com/maps/place/Ribs+al+r%C3%ADo+-+Mercado+Soho/@-34.5888724,-58.4293853,17z/data=!4m8!3m7!1s0x95bcb5ad8bdb9dbf:0xea7675417b3ef210!8m2!3d-34.5888768!4d-58.4268104!9m1!1b1!16s%2Fg%2F11s5wtfkv8?entry=ttu"
          : "https://search.google.com/local/writereview?placeid=ChIJv53bi621vJUREPI-e0F1duo";
      default:
        return isAndroid() || isIOS()
          ? "https://www.google.com/maps/place/Ribs+al+r%C3%ADo+-+Mercado+Soho/@-34.5888724,-58.4293853,17z/data=!4m8!3m7!1s0x95bcb5ad8bdb9dbf:0xea7675417b3ef210!8m2!3d-34.5888768!4d-58.4268104!9m1!1b1!16s%2Fg%2F11s5wtfkv8?entry=ttu"
          : "https://search.google.com/local/writereview?placeid=ChIJv53bi621vJUREPI-e0F1duo";
    }
  };

  useEffect(() => {
    if (rating > 3) {
      setTimeout(() => {
        setEmailSent(true);
        window.open(getReviewLink(), "_blank");
      }, 300);
    }
  }, [rating]);

  const handleKeyDown = (e) => {
    if (
      (isAndroid() && e.keyCode === 13) ||
      (e.key === "Enter" && e.shiftKey)
    ) {
      e.preventDefault();
      handleSendReview();
    }
  };

  const handleSendReview = () => {
    emailjs
      .send(
        "service_39hdv4t",
        "template_2k0wf8l",
        {
          date: moment().format("DD-MM-YYYY"),
          local: window.location.pathname.split("/")[2].toUpperCase(),
          rating: rating + "-5",
          review: rating + "-5 - " + writtenReview,
        },
        "hUXyAtRkHjhJrJvdJ"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
        },
        (error) => {
          console.error("Email send error:", error.text);
        }
      );
    setEmailSent(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {emailSent ? (
        <div>
          <h3>Gracias por tu review!</h3>
        </div>
      ) : (
        <div className="app-body">
          <h3>¿Como fue tu experiencia?</h3>

          <Rating
            name="pristine"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            iconHover={{ color: "gold" }}
            iconFilled={{ color: "gold" }}
            size="large"
          />

          {rating <= 3 && rating !== 0 ? (
            <div onKeyDown={handleKeyDown}>
              <div class="textarea-contain">
                <textarea
                  type="text"
                  id="fname"
                  name="fname"
                  maxLength={200}
                  autocomplete="off"
                  onChange={(e) => setWrittenReview(e.target.value)}
                  value={writtenReview}
                  aria-labelledby="placeholder-fname"
                />
                <label
                  class="placeholder-text"
                  id="placeholder-fname"
                >
                  <div class="text">Contanos más!</div>
                </label>
              </div>
              {writtenReview && (
                <button disabled={!writtenReview} onClick={handleSendReview}>
                  Enviar
                </button>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Reviewer;
