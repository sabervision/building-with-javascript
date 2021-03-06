import { thinky } from './thinky';

export const Question = thinky.createModel("Question", {
	text: thinky.type.string().required(),
	creationnDate: thinky.type.date().default(thinky.r.now()),
	expirationDate: thinky.type.date().required(),
	answers: thinky.type.array().schema(
		thinky.type.object().schema({
			user: thinky.type.string().required(),
			answer: thinky.type.string().required(),
		})
	),
});