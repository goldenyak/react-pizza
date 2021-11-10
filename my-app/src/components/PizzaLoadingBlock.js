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
                backgroundColor="#dedede"
                foregroundColor="#f6eeee"
            >
                <circle cx="105" cy="108" r="105"/>
                <rect x="7" y="222" rx="6" ry="6" width="201" height="18"/>
                <rect x="129" y="268" rx="0" ry="0" width="0" height="1"/>
                <rect x="7" y="253" rx="6" ry="6" width="201" height="59"/>
                <rect x="7" y="331" rx="6" ry="6" width="77" height="23"/>
                <rect x="99" y="323" rx="19" ry="19" width="109" height="37"/>
            </ContentLoader>
        </div>
    );
}

export default PizzaLoadingBlock;
