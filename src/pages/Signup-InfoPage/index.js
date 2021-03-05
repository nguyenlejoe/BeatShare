import React from 'react';
import ProfileIcon from '../../comps/ProfileIcon';
import Input from '../../comps/Input';
import TextArea from '../../comps/TextArea';
import Button from '../../comps/Button';




import "./info.scss"



const Information = () => {
    return (
        <div className="Main">
            
            <div className="questions">
            <p className="prompt">Who is your favourite artist?</p>
            <Input/>
            <p className="prompt">What is your favourite song?</p>
            <Input/>
            <p className="prompt">Tell us about your music taste.</p>
            <TextArea />

            <Button text="Sign Up"/>



            </div>

        </div>

    );
}

export default Information;