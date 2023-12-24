import { createMenuItems } from '../createMenuItems';

describe('createMenuItems', () => {
  it('should return menu items for non-authenticated user', () => {
    const itemsName = ['Home', 'Main', 'Sign In', 'Sign Up', 'Sign Out'];
    const menuItems = createMenuItems(false, itemsName);
    expect(menuItems).toHaveLength(4);
    expect(menuItems[0].key).toBe('/');
    expect(menuItems[0].elem.props.to).toBe('/');
    expect(menuItems[0].elem.props.children).toBe(itemsName[0]);
    expect(menuItems[1].key).toBe('/main');
    expect(menuItems[1].elem.props.to).toBe('/main');
    expect(menuItems[1].elem.props.children).toBe(itemsName[1]);
    expect(menuItems[2].key).toBe('/signin');
    expect(menuItems[2].elem.props.to).toBe('/signin');
    expect(menuItems[2].elem.props.children).toBe(itemsName[2]);
    expect(menuItems[3].key).toBe('/signup');
    expect(menuItems[3].elem.props.to).toBe('/signup');
    expect(menuItems[3].elem.props.children).toBe(itemsName[3]);
  });
  it('should return menu items for authenticated user', () => {
    const itemsName = ['Home', 'Main', 'Sign In', 'Sign Up', 'Sign Out'];
    const menuItems = createMenuItems(true, itemsName);
    expect(menuItems).toHaveLength(3);
    expect(menuItems[0].key).toBe('/');
    expect(menuItems[0].elem.props.to).toBe('/');
    expect(menuItems[0].elem.props.children).toBe(itemsName[0]);
    expect(menuItems[1].key).toBe('/main');
    expect(menuItems[1].elem.props.to).toBe('/main');
    expect(menuItems[1].elem.props.children).toBe(itemsName[1]);
    expect(menuItems[2].key).toBe('/signout');
    expect(menuItems[2].elem.props.children).toBe(itemsName[4]);
  });
});
