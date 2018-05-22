## How to design a custom field

### In
* Custom Properties Passed in as Rest Params
   `const componetName = ({ name, ...otherProps }) => {}`

* Initial Value
   `const { input: { initial } } = this.props`

### Out
* Trigger onchange event whenever component value get updated
   `const { input: { onChange } } = this.props`

### Internal State
* Keep value of component updated
