import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FooType } from '../../types/FooType';

import styles from './ExampleComponent.module.css';
import sharedStyles from '../shared/Shared.module.css';
import { getFoo, setFoo, deleteFoo, someCallableProcess } from '../../redux/actions/foo';
import { RootState } from '../../redux/store';
import { connect, ConnectedProps } from 'react-redux';

type CustomProps = {
    foo: FooType
}

/* Redux integration code below:

Basically lines from 
`function mapStateToProps(state: RootState) {`
to
`type PropsFromRedux = ConnectedProps<typeof connector>;`
can be copied and pasted in all of your copmonents. All you have to do is change they keys you
want to grab from the redux state in the return of mapStateToProps, and add whatever actions you 
want to call in mapDispatchToProps.

*/

// mapStateToProps is where we include keys from our redux state as props to our component.
// this will let us do this.props.foo in our component, referencing 'foo' in the redux state
function mapStateToProps(state: RootState) {
    return {
        foo: state.foo
    }
}
  
// mapDispatchToProps is an object containing your actions / thunks, here we just add all of our actions in ./actions/foo
const mapDispatchToProps = {
    getFoo,
    setFoo,
    deleteFoo,
    someCallableProcess
}

// https://react-redux.js.org/tutorials/connect#connecting-the-components
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

// combine all of our prop types
type Props = RouteComponentProps & CustomProps & PropsFromRedux

type State = {
    bar: string;
}

class ExampleComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            bar: "defaultValue"
        }
    }

    exampleMethod = () => {
        // Call your redux actions wherever
        this.props.getFoo()
        this.props.setFoo({foo: "bar"})
        // Call your redux thunk wherever
        this.props.someCallableProcess()
    }

    render() {
        return (
            // You can assign a class to an element like this
            <div className={styles.ExampleClass}>
                {/* And assign multiple like this */}
                <div className={`${styles.ExampleClass} ${sharedStyles.SharedClass}`}>
                    Make cool shit :)
                </div>
            </div>
        )
    }
}

export default withRouter(ExampleComponent);
