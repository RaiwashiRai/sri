import React from "react";
import "./share.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XtwitterIcon from "./XtwitterIcon";

export default function Share() {
  return (
    <div className="sce4">
      <button>
        <div class="letters">
          <div class="card">
            <div class="card_face front">S</div>
            <div class="card_face back">
              <a href="https://api.whatsapp.com/send?text=https://4yfxhh.csb.app/">
                <WhatsAppIcon color="success" />
              </a>
            </div>
          </div>
        </div>

        <div class="letters">
          <div class="card">
            <div class="card_face front">H</div>
            <div class="card_face back">
              <a href="https://twitter.com/intent/tweet?url=https://4yfxhh.csb.app/&text=Let's get your sustainability living score">
                <XtwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div class="letters">
          <div class="card">
            <div class="card_face front">A</div>
            <div class="card_face back">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://4yfxhh.csb.app/">
                <FacebookIcon color="info" />
              </a>
            </div>
          </div>
        </div>

        <div class="letters">
          <div class="card">
            <div class="card_face front">R</div>
            <div class="card_face back">
              <a href="mailto:?&subject=&body=https://4yfxhh.csb.app/">
                <EmailIcon color="error" />
              </a>
            </div>
          </div>
        </div>

        <div class="letters">
          <div class="card">
            <div class="card_face front">E</div>
            <div class="card_face back">
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://4yfxhh.csb.app/&title=&summary=Let's get your sustainability living score&source=">
                <LinkedInIcon color="primary" />
              </a>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
