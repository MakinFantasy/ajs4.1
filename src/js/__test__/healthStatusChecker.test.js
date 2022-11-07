import healthStatusChecker from '../healthStatusChecker';

test('test for health status checker func', () => {
    const healthy = healthStatusChecker({ name: 'Mage', health: 95 });
    expect(healthy).toBe('healthy');

    const wounded = healthStatusChecker({ name: 'Mage', health: 37 });
    expect(wounded).toBe('wounded');

    const critical = healthStatusChecker({ name: 'Mage', health: 5 });
    expect(critical).toBe('critical');
});
