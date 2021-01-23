import React from 'react';

export default class SingleDataPage extends React.Component {
    react() {
        return(
            <div>
                {this.props.singles.map(( single, i ) => {
                    return(
                        <div>
                            <div></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}