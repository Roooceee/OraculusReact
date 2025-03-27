import Aside from "./aside"
import '../css/contactContent.css'

function ContactContent(){



   return (

      <section id="contactContent">
         <article>
            <h1 className="uppercase">Contacter ORACULUS</h1>
            <p>Nous sommes ravis que vous souhaitiez entrer en contact avec nous ! Chez Oraculus, nous sommes là pour répondre à toutes vos questions, suggestions ou préoccupations. Votre opinion compte, et nous sommes déterminés à vous offrir la meilleure expérience possible.</p>

            <form action="">
               <input type="text" name="lastname" id="lastname" placeholder="votre nom" class="uppercase"/>
               <input type="text" name="name" id="name" placeholder="votre prenom" class="uppercase"/>
               <input type="email" name="email" id="email" placeholder="votre email" class="uppercase"/>
               <textarea name="" id="" placeholder="votre message" class="uppercase"/>
               <input type="submit" value="envoyer" class="uppercase"/>
            </form>

         </article>
         <Aside/>
      </section>
   )
}

export default ContactContent