const React = require('react');
const renderer = require ('react-test-renderer');
const Button = require('./Button');

describe('Button', () => {
    it('match the snapshot', () => {
			const component = renderer.create(
			   <Button />,
			);
			const tree = component.toJSON();
			expect(tree).toMatchSnapshot();
    });
});
