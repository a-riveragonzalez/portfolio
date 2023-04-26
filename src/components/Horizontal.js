import React from "react";
import "./css/horizontal.css";
import CssPic from "../images/icons/css3.png";
import ExpressPic from "../images/icons/express.png";
import GithubPic from "../images/icons/github.png";
import HtmlPic from "../images/icons/html.png";
import JavaScriptPic from "../images/icons/javascript.png";
import JqueryPic from "../images/icons/jquery.png";
import MongoPic from "../images/icons/mongodb.png";
import MysqlPic from "../images/icons/my-sql.png";
import NodePic from "../images/icons/node-js.png";
import ReactPic from "../images/icons/react.png";
import ReduxPic from "../images/icons/redux.png";
import HandlebarsPic from "../images/icons/handlebars.png";
import GitPic from "../images/icons/git.png";
import GraphQLPic from "../images/icons/graphql.png";
import NextjsPic from "../images/icons/nextjs.png";
import TailwindPic from "../images/icons/tailwind.png";

export default function Horizontal() {
  return (
    <div className="horizontal-container row py-1 mx-auto justify-content-center">
      <img className="col-2 col-md-1 icon" src={HtmlPic} alt="html icon"></img>
      <img className="col-2 col-md-1 icon" src={CssPic} alt="css icon"></img>
      <img className="col-2 col-md-1 icon" src={JavaScriptPic} alt="javascript icon"></img>
      <img className="col-2 col-md-1 icon" src={ReactPic} alt="react icon"></img>

      <img className="col-2 col-md-1 icon" src={NodePic} alt="node icon"></img>
      <img className="col-2 col-md-1 icon" src={ExpressPic} alt="express icon"></img>
      <img className="col-2 col-md-1 icon" src={MongoPic} alt="mongo icon"></img>
      <img className="col-2 col-md-1 icon" src={ReduxPic} alt="redux icon"></img>

      <img className="col-2 col-md-1 icon" src={MysqlPic} alt="mysql icon"></img>
      <img className="col-2 col-md-1 icon" src={GithubPic} alt="github icon"></img>
      <img className="col-2 col-md-1 icon" src={HandlebarsPic} alt="handlebards icon"></img>
      <img className="col-2 col-md-1 icon" src={JqueryPic} alt="jquery icon"></img>

      <img className="col-2 col-md-1 icon" src={NextjsPic} alt="next.js icon"></img>
      <img className="col-2 col-md-1 icon" src={TailwindPic} alt="tailwind icon"></img>
      <img className="col-2 col-md-1 icon" src={GitPic} alt="git icon"></img>
      <img className="col-2 col-md-1 icon" src={GraphQLPic} alt="graphql icon"></img>
    </div>
  );
}
