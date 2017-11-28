import React from "react"
import '../src/Card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.onNavigation = this.onNavigation.bind(this);
        //this.timeOut = this.timeOut.bind(this);        

        let buttons = document.getElementsByTagName('button');

        Array.prototype.forEach.call(buttons, b => {
            b.addEventListener('click', this.createRipple());
        });
    }

    createRipple = e => {
        console.log("qwe");

        let circle = document.createElement('div');
        document.body.appendChild(circle);

        let d = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = d + 'px';

        circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
        circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

        circle.classList.add('ripple');
    }

    onNavigation() {
        const { history } = this.props;
        history.push('/table');
    }

    /*timeOut(){
        setTimeout(this.onNavigation, 500);
    }*/

    render() {
        return (
            <form className="cardForm">
                <div className="titlePage">
                    <p>MATERIAL DESIGN CARDS</p>
                </div>
                <div className="cardField">
                    <div className="column_1">
                        <div className="card_1">
                            <div className="image_1">
                                <p className="img_1">1</p>
                            </div>
                            <div className="name_1">
                                <p className="text_1">Card 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="column_2">
                        <div className="card_2">
                            <div className="image_2">
                                <p className="img_2">2</p>
                            </div>
                            <div className="name_2">
                                <p className="text_2">Card 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="column_3">
                        <div className="card_3">
                            <div className="image_3">
                                <p className="img_3">3</p>
                            </div>
                            <div className="name_3">
                                <p className="text_3">Card 3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-next">
                    <button onClick={this.createRipple} onClick={this.onNavigation}>Go next page</button>
                </div>
            </form>
        )
    }
}

export default Card;