import React, { Component } from "react";
import Zmage from "react-zmage";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

      const projects = this.props.data.projects.map((projects) => {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="portfolio-desc">{projects.title}</div>
            <Zmage 
              alt={projects.title} 
              src={projectImage}
              hotKey 
              controller 
              coverVisible 
              hideOnScroll 
            />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        {/* <Fade left duration={1000} distance="40px"> */}
          <div className="row">
            <div className="twelve columns collapsed">
              <div style={{textAlign: "center", paddingBottom: "4rem", marginBottom: "4rem", borderBottom: "1px dashed #95A3A3"}}>
                <h1 style={{marginBottom: "4rem"}}><i class="fa fa-folder-open"/> Work Projects</h1>
                <a href={this.props.data.project} target="_blank" className="button btn github-btn" rel="noreferrer" style={{padding: "5px 20px", marginBottom: "4rem", fontSize: "small"}}>
                  More Portfolio
                </a>
                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  {projects}
                </div>
              </div>

              <div style={{textAlign: "center", paddingTop: "4rem"}}>
                <h1 style={{marginBottom: "4rem"}}><i class="fa fa-folder-open"/> Personal Projects</h1>
                {this.props.data.project_web.map((work, id) =>
                  <div key={id} className="mb-6">
                    <h5>{work.name}</h5>
                    <p className="m-0">
                      <i class="fa fa-github"/>{" "}<a href={work.github} target="_blank" rel="noreferrer">{work.github}</a>
                    </p>
                    <p className="mb-1">
                      {work.url ? <>
                        <i class="fa fa-eye"/> <a href={work.url} target="_blank" rel="noreferrer">{work.url}</a>
                      </> : null}
                    </p>
                    <div className="skill-container">
                      {work?.technology?.map(skill =>
                        <div class="skill-labels">
                          ✔ {skill}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        {/* </Fade> */}
      </section>
    );
  }
}

export default Portfolio;
