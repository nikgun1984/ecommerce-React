import React from "react";
import Input from "./Input";

export default {
	title: "Input",
	component: Input,
};

export const Primary = () => <Input size="primary">Primary</Input>;
export const Secondary = () => <Input variant="secondary">Secondary</Input>;
export const Success = () => <Input variant="success">Success</Input>;
export const Danger = () => <Input variant="danger">Danger</Input>;
