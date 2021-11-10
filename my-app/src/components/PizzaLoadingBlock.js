import React from 'react';
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#e00b75"
                foregroundColor="#f6eeee"
            >
                <rect x="12" y="258" rx="3" ry="3" width="187" height="59"/>
                <rect x="15" y="228" rx="3" ry="3" width="179" height="20"/>
                <circle cx="105" cy="109" r="105"/>
            </ContentLoader>
        </div>
    );
}

export default PizzaLoadingBlock;
