function About() {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center w-10/15 mr-5'>About</h1>
            <div className="mt-4">
                My name is Keng I (yes, with an I •ᴗ•) My first foray into programming started off with a simple goal: to automate interactions using LUA scripting.
                <br></br>Through self-learning, coding became an interest that I developed over time.

                <br></br><br></br>My undergraduate coursework focused on development, security and artificial intelligence. In addition to developing full-stack applications, I act as both Wreck-It Ralph and Fix-It Felix by looking for any security flaws that users could easily exploit.
                I enjoy challenges too, so in recent semesters I've been exploring deep learning and artificial intelligence in the hopes of one day being able to solve problems in the real world effectively.

                <br></br><br></br>Outside of work and study, I am probably listening to music and watching anime shows!
            </div>
            <div className="mt-8">
                <h2 className='text-xl font-bold'>Technologies I worked with:</h2>
                <table class="table-fixed w-full">
                    <tbody>
                        <tr>
                            <td>MongoDB</td>
                            <td>Material UI</td>
                            <td>JavaScript</td>
                            <td>TensorFlow</td>
                        </tr>
                        <tr>
                            <td>Express.Js</td>
                            <td>BootStrap</td>
                            <td>Python</td>
                            <td>GitHub CI/CD</td>
                        </tr>
                        <tr>
                            <td>ReactJs</td>
                            <td>Tailwind CSS</td>
                            <td>Java</td>
                            <td>AWS Elastic Beanstalk</td>
                        </tr>
                        <tr>
                            <td>Node.js</td>
                            <td>CSS</td>
                            <td>Objective-C</td>
                            <td>Telegram Bot</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)
}

export default About;