import UserCard from "@/components/UserCard";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserCard name="Thái Bình" age={18} isAdmin={true} />
      <UserCard name="Hương Giang" age={17} isAdmin={false} />
    </View>
  );
}
