import Section from "../utils/Section.jsx";
import PieChart from "../utils/PieChart.jsx";

function Tokenomics() {
    return (
        <Section heading="Tokenomics">
            <h3 className="text-xl font-semibold">Initial Distribution</h3>
            <div className="grid grid-cols-[200px_1fr]">
                <PieChart />
                <div>

                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur blanditiis consectetur
                consequuntur culpa doloremque ea eaque et exercitationem facilis id impedit in ipsam ipsum iste iusto,
                laudantium libero minima molestiae molestias nam nesciunt officia quae quaerat recusandae reiciendis rem
                repudiandae sed similique tempore temporibus totam veniam voluptatem. Odio, porro?</p>
        </Section>
    )
}

export default Tokenomics;