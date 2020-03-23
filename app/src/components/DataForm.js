import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

const DataForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return (
        <>
            {props.isFetchingData ? (
                <div>Fetching Data</div>
            ) : (
                <button onClick={handleGetData}>Get Data</button>
            )}
        </>
    );
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(DataForm);