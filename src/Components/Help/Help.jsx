import React from "react";
import "./Help.css";
const Help = () => {
  return (
    <div>
      <dl>
        <p>Wow, I thought the only people who would visit this site would be bots and spammers, guess I was wrong. Just type any of the commands below to get some more info.</p>
        <dt class="data-dt">whoami</dt>
        <dt></dt>
        <dd class="data-dd"> - What I do</dd>
        <dt class="data-dt">about</dt>
        <dt></dt>
        <dd class="data-dd"> - Stop stalking me</dd>
        <dt class="data-dt">skills</dt>
        <dt></dt>
        <dd class="data-dd"> - I'm preety good at some things</dd>
        {/* <dt class="data-dt">projects</dt> */}
        <dt></dt>
        {/* <dd class="data-dd">
          {" "}
          - Yeah, I've made some really cool stuff, Wanna see!!
        </dd> */}
        <dt className="data-dt">cv</dt>
        <dt></dt>
        <dd className="data-dd"> - Check out my resume[pdf]</dd>
        <dt class="data-dt">website</dt>
        <dt></dt>
        <dd class="data-dd"> - My portfolio site but with GUI</dd>
        <dt class="data-dt">contact</dt>
        <dt></dt>
        <dd class="data-dd"> - Want to say something?</dd>
        <dt class="data-dt">clear</dt>
        <dt></dt>
        <dd class="data-dd"> - Clears the terminal of all output</dd>
        <dt class="data-dt">cmd/ctrl + k</dt>
        <dt></dt>
        <dd class="data-dd"> - Keyboard shortcut to clear the terminal</dd>
      </dl>
    </div>
  );
};

export default Help;
