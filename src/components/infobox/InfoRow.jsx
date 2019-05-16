import React from 'react';

const InfoRow = ({ property, value, num = false, arr = false, obj = false, fin = false }) => {
    if (arr) {
        if (obj) {
            return (
                <div>
                    <span className="mx-3">"{property}":</span>
                    <span>[{value.map((v, i) => (
                        <React.Fragment key={i}><div className="ml-10"><div>&#123;</div>
                            <span className="ml-5">"name":</span><span className="text-green-800 ml-5">"{v.name}"{i === value.length - 1 ? <div className="text-black"> &#125;</div> : <div className="text-black"> &#125;, </div>}</span>
                            <span className="ml-5">"type":</span><span className="text-green-800 ml-5">"{v.type}"{i === value.length - 1 ? <div className="text-black"> &#125;</div> : <div className="text-black"> &#125;, </div>}</span>
                        </div></React.Fragment>
                    ))}<span className="ml-5">]{fin ? '' : ','}</span>
                    </span>
                </div>
            );
        } else {
            return (
                <div>
                    <span className="mx-3">"{property}":</span>
                    <span>
                        [{value.map((v, i) => (
                            <React.Fragment key={i}><div className="text-green-800 ml-10">"{v}"{i === value.length - 1 ? `` : <span className="text-black">, </span>}</div></React.Fragment>
                        ))}<span className="ml-5">]{fin ? '' : ','}</span>
                    </span>
                </div>
            );
        }
    } else {
        return (
            <div>
                <span className="mx-3">"{property}":</span>
                <span className={num ? "text-blue-900" : "text-green-800"}>{num ? value : `"${value}"`}</span>
                {fin ? '' : ','}
            </div>
        );
    }
}

export default InfoRow;