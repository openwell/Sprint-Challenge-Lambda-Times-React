import React from 'react';
import propTypes from 'prop-types'
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.selectedTab === props.tab ? 'tab active-tab': ''}
      onClick={() => props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes={
  selectTabHandler: propTypes.func,
  selectedTab: propTypes.string,
  tab: propTypes.string
}
export default Tab;
