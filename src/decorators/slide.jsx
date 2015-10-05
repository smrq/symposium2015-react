import React from 'react';
import SubslideController from '../components/SubslideController';

function noop() {}

export default function slideDecorator(color = 'dark') {
	return function createSlide(component) {
		return class SlideComponent extends component {
			constructor(props) {
				super(props);
				this.state = this.state || {};
				this.state.click = 0;
			}

			render() {

				const prev = () => {
					const { click } = this.state;
					if (click > 0)
						this.setState({ click: click - 1 });
				}

				const next = () => {
					const { click } = this.state;
					this.setState({ click: click + 1 });
				}

				return <div className={'slide slide-' + color}>
					{ super.render() }
					<SubslideController prev={prev} next={next} />
				</div>;
			}
		}
	}
}