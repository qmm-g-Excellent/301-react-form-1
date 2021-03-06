import {connect} from 'react-redux';
import Sections from '../component/sections';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSections: () => {
      dispatch({type: 'LOAD_SECTIONS'});
    },
    deleteSection: (data) => {
      dispatch({type: 'DELETE_SECTIONS', data});
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Sections);