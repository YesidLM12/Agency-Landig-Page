import styles from "../styles/Desktop.module.css";
import eggs from "../assets/images/desktop/image-transform.jpg";
import cup from "../assets/images/desktop/image-stand-out.jpg";
import graphic from "../assets/images/desktop/image-graphic-design.jpg";
import photography from "../assets/images/desktop/image-photography.jpg";
import Cart from "../Components/Cart";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Carrusel from "../Components/Carrusel";
import ClientTestimonial from "../Components/Clienttestimonial";
import emily from "../assets/images/image-emily.jpg";
import jennie from "../assets/images/image-jennie.jpg";
import thomas from "../assets/images/image-thomas.jpg";

export default function Desktop() {
  return (
    <>
      <Header />
      <section className={styles.containerCart}>
        <div className={styles.Cart}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.title}>Transform your brand</h2>
              <p className={styles.description}>
                We are a full-service creative agency specializing in helping
                brandds grow fast. Engage your clients through compelling
                visuals that do most of the marketing for you.
              </p>
              <a href="">LEAR MORE</a>
            </div>
            <img src={eggs} alt="eggs" />
          </div>
        </div>

        <div className={styles.CartCup}>
          <div className={styles.content}>
            <img src={cup} alt="eggs" />

            <div className={styles.text}>
              <h2 className={styles.title}>Stand out to the right audience</h2>
              <p className={styles.description}>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we´ll build
                exetend your brand in digital places.
              </p>
              <a className={styles.aStandOut} href="">
                LEAR MORE
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.components}>
        <Cart
          title={"Graphic Desig"}
          description={
            "Great desig makes you memorable. We deliver artwork thak underscores your brand message and captures potential client´s attention."
          }
          background={graphic}
        />

        <Cart
          title={"Photography"}
          description={
            "Increase your credibility bt getting the most stunnig, high-quality photos that improve your bussiness image."
          }
          background={photography}
        />
      </div>
      <div className={styles.column}>
        <div className={styles.containerTestimonial}>
          <h2 className={styles.titleTestimonials}>CLIENT TESTIMONIALS</h2>

          <div className={styles.testimonial}>
            <ClientTestimonial
              img={emily}
              description={
                "We put pur trust in Sunnydise and they delivered, making sure our needs were met and deadlines were always hit."
              }
              name={"Emily R."}
              cargo={"Marketing Director"}
            />

            <ClientTestimonial
              img={thomas}
              description={
                "Synnyside´s enthusiasm coupled with their keen interest in pur brand´s succes made it a satisfying and enjoyable experience."
              }
              name={"Thomas S."}
              cargo={"Chief operating officer"}
            />

            <ClientTestimonial
              img={jennie}
              description={
                "Incredible end result! Our sales increasen over 400% when we worked with Sunnyside. Highly recommended!"
              }
              name={"Jennie F."}
              cargo={"Bussiness Owner"}
            />
          </div>
        </div>
        <Carrusel />

        <Footer />
      </div>
    </>
  );
}
