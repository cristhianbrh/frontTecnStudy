import { useState } from "react";
import './HomeStyle.css';
import layerOptions from "../../../config/homeLayer/homeLayer";

const HomePage = () => {
    const [indexCurrentLayer, setIndexCurrentLayer] = useState(0);

    return (
        <div className="HomePage">
            <div className="options">
                {layerOptions.map((option, index) =>
                    <div key={"layerOption"+option.name} onClick={() => setIndexCurrentLayer(index)} className={(indexCurrentLayer === index) ? '__islayerActive' : ''} >
                        {option.svg}
                        <p>{option.name}</p>
                    </div>
                )}

            </div>
            <div className="layer">
                {layerOptions[indexCurrentLayer].layer}
            </div>
        </div>
    )
}
export default HomePage;