import Counter from "@/components/Counter";
import LiveInput from "@/components/LiveInput";
import LoadingContainerProps from "@/components/LoadingContainerProps";
import MyButton from "@/components/MyButton";
import TodoBasic from "@/components/TodoBasic";
import UserCard from "@/components/UserCard";
import { View, Text } from "react-native";

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
      <Counter />
      <TodoBasic />
      <MyButton label="Nút test" onPress={() => alert("Nút xanh")} />
      <MyButton
        label="Nút test"
        color="red"
        onPress={() => {
          alert("Nút đỏ");
        }}
      />
      <LiveInput />
      <LoadingContainerProps isLoading={true}>
        <Text>Đã tải dữ liệu</Text>
      </LoadingContainerProps>
    </View>
  );
}
