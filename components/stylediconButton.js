// import React from 'react';
// import { TouchableOpacity, Text, View } from 'react-native';

// const StyledIconButton = ({ label, onPress, disabled, helperText, style }) => {
//   const buttonStyle = disabled ? [style, { opacity: 0.5 }] : style;

//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <TouchableOpacity style={[{ borderRadius: 10, padding: 10, backgroundColor: 'blue' }, buttonStyle]} onPress={onPress} disabled={disabled}>
//         <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{label}</Text>
//       </TouchableOpacity>
//       {helperText && <Text style={{ marginLeft: 10, color: 'gray' }}>{helperText}</Text>}
//     </View>
//   );
// };

// export default StyledIconButton;


import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const StyledIconButton = ({ label, onPress, disabled, helperText, style, isVisible }) => {
  const buttonStyle = disabled ? [style, { opacity: 0.5 }] : style;

  return (
    <View >
      <View >
        <TouchableOpacity style={[{ borderRadius: 0, padding: 10, backgroundColor: 'blue' }, buttonStyle]} onPress={onPress} disabled={disabled}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{label}</Text>
        </TouchableOpacity>
        {isVisible && <Text style={{ color: 'yellow', textAlign: 'center' }}>{helperText}</Text>}
      </View>
    </View>
  );
};

export default StyledIconButton;
