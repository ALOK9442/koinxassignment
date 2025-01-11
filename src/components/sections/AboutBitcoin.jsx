import Section from "../utils/Section.jsx";
import BitcoinSection from "../utils/BitcoinSection.jsx";
import bcImg1 from "../../assets/bc1.jpg";
import bcImg2 from "../../assets/bc2.jpg";

function AboutBitcoin() {
    return (
        <Section heading="About Bitcoin" >
            <h3 className="text-xl font-semibold">What is Bitcoin?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque debitis esse fugiat ipsam iusto nostrum optio quaerat, quas quod rerum, tempore veritatis voluptate! Eius eveniet harum nulla omnis quis?</p>
            <hr />
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consequuntur dolore doloribus dolorum enim excepturi facere facilis hic inventore minima, mollitia, natus nulla officia optio perferendis possimus praesentium quasi quibusdam repudiandae sapiente sint suscipit tenetur? Alias blanditiis dolore excepturi impedit iure minima nesciunt soluta. Consectetur dolorem id quaerat voluptas.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur atque consequuntur dolores enim error nobis placeat provident recusandae velit? Ad animi aperiam autem beatae commodi consectetur corporis delectus earum ex harum id incidunt laborum magni, minima nobis nulla numquam omnis optio porro quas quidem quisquam ratione recusandae vel veniam.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis deserunt dolor eum illo laborum, laudantium necessitatibus nemo nobis praesentium, ratione recusandae repellat sed, ut veniam? Aliquam dolorem dolorum ea est expedita, facilis ipsum iusto odio placeat quae quasi rerum! Aliquid architecto eius eum id in laboriosam laborum rem rerum.</p>
            <hr />
            <h2 className="text-2xl font-semibold mb-2">Already holding Bitcoin?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <BitcoinSection heading="Calculate your profits and loss" img={bcImg2}/>
                <BitcoinSection heading="Calculate your tax liability" img={bcImg1  } bg="bg-gradient-to-r from-orange-300 to-orange-500"/>
            </div>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut debitis earum exercitationem impedit, libero molestiae numquam odit possimus quidem quod similique sint tempore, vero voluptate. Autem consequuntur maiores optio?
            </p>
        </Section>
    )
}

export default AboutBitcoin;