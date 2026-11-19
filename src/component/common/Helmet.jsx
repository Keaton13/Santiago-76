import React, { Component } from "react";
import {Helmet} from 'react-helmet'

const DEFAULT_DESCRIPTION =
    "Santiago 76 in Santa Ana: food mart, 100% hand car wash and detailing, check cashing and auto registration. Family owned since 1996.";

// Sets the page title, and updates the single description tag that lives in
// public/index.html (so there is never more than one description on a page).
class PageHelmet extends Component{
    componentDidMount(){
        this.setDescription();
    }
    componentDidUpdate(){
        this.setDescription();
    }
    setDescription(){
        const tag = document.querySelector('meta[name="description"]');
        if (tag) tag.setAttribute("content", this.props.description || DEFAULT_DESCRIPTION);
    }
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
