import React from "react";
import { StyleSheet, Text, View } from "react-native";

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text stye={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020/12/4</Text>
          </View>
          <Text>X</Text>
        </View>
      </View>
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  appbar: {
    width: "100%",
    height: 104,
    backgroundColor: "#467FD3",
    justifyContent: "flex-end",
  },
  appbarInner: {
    alignItems: "center",
  },
  appbarTitle: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#FFFFFF",
    marginBottom: 8,
    lineHeight: 32,
  },
  appbarRight: {
    position: "absolute",
    bottom: 16,
    right: 19,
    color: "rgba(255,255,255,0.8)",
  },
  memoListItem: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 19,
    paddingVertical: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 32,
    color: "#848484",
  },
  circleButton: {
    backgroundColor: "#467FD3",
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#FFFFFF",
    fontSize: 40,
  },
});
