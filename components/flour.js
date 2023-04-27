const FlourNumbers = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text>flour02</Text>
          <Switches value={flour2} onToggleSwitch={onToggleFlour2} />
        </View>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text>flour03</Text>
          <Switches value={flour3} onToggleSwitch={onToggleFlour3} />
        </View>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text>flour04</Text>
          <Switches value={flour4} onToggleSwitch={onToggleFlour4} />
        </View>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text>flour05</Text>
          <Switches value={flour5} onToggleSwitch={onToggleFlour5} />
        </View>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text>flour06</Text>
          <Switches value={flour6} onToggleSwitch={onToggleFlour6} />
        </View>
      </View>
    );
  };