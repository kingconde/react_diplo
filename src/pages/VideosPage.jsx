import React from "react";

const VideosPage = () => (
    <>
        <h1 className="s-center">Tutoriales</h1>
        <br/>
        <div className="ed-grid m-grid-3">
            <iframe width="380" height="195" src="https://www.youtube.com/embed/w7ejDZ8SWv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="380" height="195" src="https://www.youtube.com/embed/BO-nhyqpm7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="380" height="195" src="https://www.youtube.com/embed/5DXdL-ZESSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </>
)

export default VideosPage