import {div} from '@cycle/dom';
import xs from 'xstream';
import {html} from 'snabbdom-jsx';

export function App (sources) {
  const sinks = {
    DOM: xs.select(
      <div>Robert Face</div>
    )
  };
  return sinks;
}
