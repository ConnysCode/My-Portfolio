import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Typical from 'react-typical';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import LinkIcon from '@material-ui/icons/Link';

export function Encrypt() {
    return (
        <div>
            <div className="Page TopMargin">
                <div className="Title">
                    <h2><Link to="/portfolio"><ChevronLeftIcon className="arrow big" variant="contained" color="action" /></Link>The development of <span className="tag">encrypt.</span></h2>
                    <code><p className="subtitle">A {` `}
                        <Typical className="tag" loop={1} wrapper="b" steps={[`community driven 2D platformer.`]} />
                    </p></code>
                </div>
                <div className="Content PageText">
                    <h3>What is "encrypt."?</h3>
                    <p className="FullText">"encrypt." is a competitive platformer! Build your own stages or play stages from the community and compete with other players!
                        "encrypt." brings back Retro-Game feelings with modern Pixel-Graphics. We can promise you, this Game will offer you a lot of fun and a nostalgic atmosphere!</p>
                    <br />
                    <h3>Unleash your Creativity</h3>
                    <p className="FullText">In "encrypt." you build your own creative stages using our innovative StageCreator, which provides you with a plethora of different blocks,
                        backgrounds, vegetation and decorations, and then let the world compete on them!<br />
                        Build huge castles, underwater worlds, mythical environments or small ponds, paths or abstract ideas using only your keyboard and mouse!<br />
                        Or you can stick more to the basics and create a really hard stage that only the best of the best can complete. <b>It's entirely up to you!</b>
                    </p>
                    <br />
                    <img src="https://img.namespace.media/images/2021/09/19/Decoration1.png" alt="Decoration" />
                    <div className="info FullText">{/* <h4>We had some difficulties lol</h4> */}<p><q>Poseidon</q> on the Stage <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2097350160&searchtext=pavlopetri"><q>pavlopetri</q></a>.</p></div>
                    <br />
                    <h3>Compete on the Leaderboards</h3>
                    <p className="FullText">Have you created a stage? Great! Then upload it directly to the workshop and- <i>Oh...</i><br />
                        Someone has already beaten your time! You can't let that sit on you! Find new and faster ways to finish your own
                        stage and earn first place again.<br /> Or you download one of the countless stages that our community has built
                        for you from the workshop and use your creative skills to solve the stage faster than anyone else on the leaderboard!</p>
                    <br />
                    <img src="https://img.namespace.media/images/2021/09/19/encrypt_1jn3btfc4D.png" alt="Decoration" />

                    {/* <h3>Codename: Shinju</h3>
                    <p className="FullText">The idea for a puzzle-based arcade platformer came to us first and foremost in October 2019.
                        The plan was to create a story-heavy little environment where players can retreat and exercise their brains while enjoying the story.<br />
                        To realize this, we first put all our focus on the control of the character.
                        Character control is the most important part of making the game feel good, so we wrote some character controllers and movement tiles.<br />
                        In order to be able to test our new CharacterControllers and Tiles more quickly, we experimented with the concept of a StageCreator on the side. However,
                        we were sure: <b>"The StageCreator remains a development feature!"</b>.. Yeah.<br /><br />
                        <b>Well, catch us two hours later without any progress as we are building, sharing and playing our stages.</b>
                        <br />That was the point at which we were sure that this would play an important role in our as yet unnamed puzzle game.</p> */}
                    {/* <br />
                    <div className="info FullText"><h4>Headline Test</h4><p>Subtitle Test</p></div>
                    <img src="https://img.namespace.media/images/2021/09/15/stageInfo06.png" alt="WIP" />
                    <br></br><br></br> */}
                    {/* <h3>{"Challenges & Requirements"}</h3>
                    <p className="FullText">Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetuer.
                        </li>
                        <li>
                            Aenean commodo ligula eget dolor.
                        </li>
                        <li>
                            Aenean massa cum sociis natoque penatibus.
                        </li>
                        <li>
                            Pellentesque auctor neque nec urna.
                        </li>
                    </ul> */}
                </div>
                <div className="steam"><a href="https://encrypt.namespace.media/"><span className="default">visit</span> encrypt. <span className="default">on</span> Steam</a></div>
            </div>

        </div>
    );
}

export function XP() {
    return (
        <div>
            <div className="Page TopMargin">
                <div className="Title">
                    <h2><Link to="/portfolio"><ChevronLeftIcon className="arrow big" variant="contained" color="action" /></Link>The development of <span className="tag">XP</span></h2>
                    <code><p className="subtitle">The {` `}
                        <Typical className="tag" loop={1} wrapper="b" steps={[`Top-Tier leveling solution on Discord.`]} />
                    </p></code>
                </div>
                <div className="Content PageText">
                    <h3>Project Background</h3>
                    <p className="FullText">Project summary goes here. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>
                </div>

            </div>
        </div>
    );
}
