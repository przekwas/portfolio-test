import React from "react";
import InfoRow from "./InfoRow";

const InfoBox = () => {
    return (
        <div className="font-mono">
            <span className="block my-2">&#123;</span>
            <InfoRow property="name" value="Luke Przekwas" />
            <InfoRow property="age" value="32" num />
            <InfoRow property="location" value="Birmingham, AL" />
            <InfoRow property="current_company" value="Covalence" />
            <InfoRow property="spouse" value="true" num />
            <InfoRow property="description" value={["passionate about learning", "competetive smash bros. player", "loves cats", "actually shows up to help you move"]} arr />
            <InfoRow property="pets" value={[{ name: "Yzerman", type: "cat" }, { name: "Apollo", type: "cat" }]} arr obj fin />
            <span className="block my-2">&#125;</span>
        </div>
    );
}

export default InfoBox;