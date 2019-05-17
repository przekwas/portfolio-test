import React from 'react';

const InfoRow = ({ property, value, num = false, arr = false, obj = false, fin = false }) => {
    const trailingComma = fin ? '' : ',';
    if (arr) {
        if (obj) {
            return (
                <div>
                    <span className="mx-3">"{property}":</span>
                    [{value.map((v, i) => (
                        <React.Fragment key={i}>
                            <div className="ml-10">&#123;</div>
                            <div className="ml-16"><span className="mx-3">"name":</span><span className="text-green-800">"{v.name}"</span>,</div>
                            <div className="ml-16"><span className="mx-3">"type":</span><span className="text-green-800">"{v.type}"</span>,</div>                            <div className="ml-16"><span className="mx-3">"age":</span><span className="text-blue-900">{v.age}</span>,</div>
                            <div className="ml-10">&#125;{i === value.length - 1 ? '' : ','}</div>
                        </React.Fragment>
                    ))}<span className="ml-5">]{trailingComma}</span>
                </div>
            );
        } else {
            return (
                <div>
                    <span className="mx-3">"{property}":</span>
                    <span>
                        [{value.map((v, i) => (
                            <React.Fragment key={i}><div className="text-green-800 ml-10">"{v}"{i === value.length - 1 ? `` : <span className="text-black">,</span>}</div></React.Fragment>
                        ))}<span className="ml-5">]{trailingComma}</span>
                    </span>
                </div>
            );
        }
    } else {
        return (
            <div>
                <span className="mx-3">"{property}":</span>
                <span className={num ? "text-blue-900" : "text-green-800"}>{num ? value : `"${value}"`}</span>
                {trailingComma}
            </div>
        );
    }
}

export default InfoRow;