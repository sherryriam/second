function ContactForm(props){ 
    
    return ( 
        <div className="contact-container" id="contact">
            <div>
                <fieldset>
                    <legend>please fill in the form</legend>
                    <form className="form">
                        <label for id="name">Name: </label>
                        <input type="text" id="name" name="name" placeholder="Enter your name"/>
                        <label for id="email">Email: </label>
                        <input type="text" id="email" name="email" placeholder="Enter your email"/>
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <textarea />
                        <label>Christian</label>
                        <input type="checkbox"/>
                        <label>Muslim</label>
                        <input type="checkbox"/>
                        <input type ="button" onClick="handleSubmit" id="submit-btn" value="Submit"/>
                    </form>
                </fieldset>
            </div>
            <div className="contact-info">
                <p id="message"></p>
                <h2>Contact us</h2>
                <h2>0706311171</h2>
                <a href="mailto: mirriamgacheri@gmail.com">click to send an email</a>
            </div>
            <div className="time">
                <p>Feel free and happy to contact us</p> 
                <p>We are here for you</p>
                <p>from 6.00am to 6.00pm everyday</p>
            </div>
        </div>
    )
}

export default ContactForm;