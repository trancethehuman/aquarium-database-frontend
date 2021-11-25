import './FishExpanded.css';
import Espes from './Rasboras.jpg';

export const FishExpanded = () => {
    return (
        <div className='fishCard'>
            <div className='fishHeader'>
                <img className='fishImg'src={Espes} alt='Espes Rasbora'/>
                <h1 className='fishName'>Espe's Rasbora</h1>
                <h3 className='subName'>Tyranosaurous</h3>
            </div>
            <div className='fastFacts'>
                <div className='temperament'>
                    <h2>Temperament</h2>
                    <h1>Peaceful 😌</h1>
                </div>
                <div className='fishFact'>
                    <img className='infoSymbol' src="https://img.icons8.com/ios-filled/50/4a90e2/info.png"/>
                    <h2>Fact</h2>
                    <p>The Espe's Rasbora is an adorable little cyprinid originating from overgrown jungle streams!</p>
                </div>
                <div className='parameters'>
                    <h2>Water Parameters</h2>
                    <p>Temperature: <b>22.8 to 26.7° C</b></p>
                    <p>pH Level: <b>6.0-8.0</b></p>
                    <p>dH Level: <b>1 - 15 dGH</b></p>
                </div>
                <div className='careLevel'>
                    <h2>Care level</h2>
                    <h1>Easy ✅</h1>
                </div>
            </div>
            <div className='fishInfo'>
                <div className='infoHeader'>
                    <h2>Fish Information</h2>
                </div>
                <div>
                    <h3>Size</h3>
                    <p>3.0 cm (1.2 inches)</p>
                </div>
                <div>
                    <h3>Diet Type</h3>
                    <p>Omnivore</p>
                </div>
                <div>
                    <h3>Food</h3>
                    <p>Flake and livefood</p>
                </div>
                <div>
                    <h3>Minimum Tank Size</h3>
                    <p>10 gallons</p>
                </div>
                <div>
                    <h3>Plants?</h3>
                    <p>Yes!</p>
                </div>
                <div>
                    <h3>Lifespan</h3>
                    <p>3 years</p>
                </div>
            </div>    
        </div>
    )
}