import React from 'react';
import "./body.css";

import interfaceImage from '../assets/interface.png'
import storyboardImage from '../assets/storyboard.png'
import tomMap from '../assets/tom.png'
import vivienneMap from '../assets/vivienne.png'
import tomPicture from '../assets/tomProfile.png'
import viviennePicture from '../assets/vivienneProfile.png'


const questions = [
    "When you approached the kiosk, what was the first thing you did?",
    "Can you describe any moments when you faced confusion or inconvenience while using the interface?",
    "If you were designing a kiosk for a new user, what would you change about the interface?",
    "What would make ordering from this kiosk more enjoyable for you?"
];

const responses = [
    ["Entered my phone number", "Read the text at the top of the kiosk", "Tapped and started entering my phone number before I realized I could skip this step"],
    ["No", "When I clicked on the drink I wanted I tried to add to my bag but it wouldn't let me. I later found out there were required options I had to fill out.", "At first I didn't know what tabs to look at since there were so many options to scroll through and look at."],
    ["Nothing", "Change the layout to allow for easier sight of all options available", "Change the color and size of text on the screen to make known options more obvious"],
    ["Nothing", "Show a grouping of the most popular drinks so I know what people like getting here", "If I could read the full description of the menu item without clicking on the item itself"]
];

const summaries = [
    ["Users tapped on the screen immediately or read the tape at the top and bottom of the kiosk briefly"],
    ["Users were unsure of which drinks were considered free drinks", "Users had to restart my order to enter my phone number", "Users who did not use points faced no confusion"],
    ["Making the drinks more discoverable and easier to look through. Avoid having users scroll up and down multiple times.", "Describe the benefits of points all at once instead of slides."],
    ["Knowing what drinks are most popular and most ordered to avoid having to choose and look through all of the options", "Having a start button on the main screen makes entering more satisfying"]
];

const userBehavior = [
    "Users scrolled through the entire menu once or several times.",
    "Ordered only 1 drink and then went immediately to the checkout.",
    "Users learned the interface quickly.",
    "Fast process from beginning to end."
];

const purchaseDecisions = [
    "Users did not get cup bags.",
    "No promotional codes were used."
];

const Body = () => {
    return (
        <section className="body">
            <h1>Persona Project</h1>

            <p>This project will look at the experiences of users with the Ten One Tea House ordering kiosk. User intereactions
            with the kiosk will be observed and users will be interviewed on their experiences with the interface. From these
            observations and interviews, personas will be created to represent the different types of users that interact with
            the kiosk. These personas will be used to create a storyboard that will show how certain users are expected to interact with
            the kiosk.</p>

            <h1>Interface</h1>
            <p>The interface I choose to base my project on is the Ten One Tea House ordering kiosk. Below is a simplified diagram with the key compoenents of the interface:</p>
            <img src={interfaceImage} alt="Kiosk Interface" className="kiosk-image" />
            <p className='center'>The kiosk is trying to reduce the workload of drink orders on workers and streamline the ordering process for users. The interface is a physical kiosk that is attached to the kisok stand
            The kiosk interface is a touch screen that allows users to select and order drinks from the Ten One Tea House menu. The interface has several digital components (ex. buttons) that allow users to navigate through the menu, 
            select and customize drinks, and prompt the user to make a payment. There is then a card swiper/scanner to allow users to make payment transactions.</p>
            <h1>User Responses</h1>
            <p>3 users were interviewed and asked the following questions:</p>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th className="divider">Question</th>
                            <th className="divider">User 1</th>
                            <th className="divider">User 2</th>
                            <th className="divider">User 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={index} className="divider">
                                <td className="question divider">{question}</td>
                                <td className="divider">{responses[index][0]}</td>
                                <td className="divider">{responses[index][1]}</td>
                                <td className="divider">{responses[index][2]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1>Response Summaries</h1>
            <p>A summary of user responses:</p>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th className="divider">Question</th>
                            <th className="divider">Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={index} className="divider">
                                <td className="question divider">{question}</td>
                                <td className="divider">
                                    <ul>
                                        {summaries[index].map((summary, i) => (
                                            <li>{summary}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1>User Action Observations</h1>
            <p>An objective list of actions that users took while interacting with the kiosk:</p>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th className="divider">User Behavior & Navigation</th>
                            <th className="divider">Purchase Decisions & Preferences</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="divider">
                            <td className="divider">
                                <ul>
                                    {userBehavior.map((insight, i) => (
                                        <li key={i}>{insight}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="divider">
                                <ul>
                                    {purchaseDecisions.map((insight, i) => (
                                        <li key={i}>{insight}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1>Personas</h1>
            <p>Based on the observations and responses of users, I will be creating two personas that represent different
                types of customers that may interact with the Ten One Tea House kiosk. These personas will also have emptahy maps, detailing
                the personas's thoughts, feelings, and actions when interacting with the kiosk. The two personas are Vivienne and Tom.
            </p>
            <h2>Vivienne</h2>
            <img src={viviennePicture} alt="Vivienne" className="profile-image" />

            <ul className='ul-desc'>
                <li className='li-desc'><strong>Description:</strong> A college student who likes getting boba often. An ambitious and diligent person who enjoys taking breaks, especially for boba.</li>
                <li className='li-desc'><strong>Problems Vivienne faces:</strong> A problem Vivienne faces is that she has to go through the entire process over and over again when ordering a drink. She has to remake her favorite order and decline paper cups every time she visits.</li>
                <li className='li-desc'><strong>Why Vivienne?</strong> The majority of people who drink boba at Ten One Tea House are college students. A large number of people who go to Ten One Tea House have previously been there and are familiar with the ordering kiosk. Vivienne’s experience and problems with the interface are shared by many, making her persona one that encompasses a large population of users.</li>
            </ul>

            <img src={vivienneMap} alt="Vivienne Empathy Map" className="map-image" />

            <h2>Tom</h2>
            <img src={tomPicture} alt="Tom" className="profile-image" />

            <ul className='ul-desc'>
                <li className='li-desc'><strong>Description:</strong> A millennial consultant who is in the workforce. Lives a simple and frugal life but wants to keep up with the younger generation.</li>
                <li className='li-desc'><strong>Problems Tom faces:</strong> Tom struggles with selecting a drink he wants and has to constantly scroll through all of the options. He is also confused about what comes with his drink.</li>
                <li className='li-desc'><strong>Why Tom?</strong> People who have not had boba or do not know what it is may struggle with choosing a drink. People ordering boba for the first time will learn and interact with the kiosk the most to learn more about their drink options and what/how to order. Tom’s experience encompasses the problems of someone having boba or interacting with this interface for the first time, which has been everyone at least once.</li>
            </ul>

            <img src={tomMap} alt="Tom Empathy Map" className="map-image" />

            <h1>Storyboard</h1>
            <p>This storyboard will follow the Tom persona, detailing how Tom would interact with the kiosk interface from start to finish</p>
            <img src={storyboardImage} alt="Storyboard" className="storyboard-image" />

        </section>
    );
};

export default Body;
