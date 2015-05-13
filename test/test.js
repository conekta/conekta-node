var assert = require('assert'),
    conekta = require('../index.js');

const LOCALE = 'es',
    API_KEY = 'key_eYvWV7gSDkNYXsmr';

var charge = '',
    chargeCapture = '',
    amount = 50000,
    plan = 'jul0-plan',
    customer = '';

describe('Charge', function() {

    describe('create with card', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                description: 'Stogies',
                amount: amount,
                currency: 'MXN',
                reference_id: '9839-wolf_pack',
                card: 'tok_test_visa_4242',
                details: {
                    email: 'logan@x-men.org'
                },
                capture: false
            }, function(res) {
                chargeCapture = res.id;
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('create with card montly installments', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                description: 'Stogies',
                amount: amount,
                currency: 'MXN',
                reference_id: '9839-wolf_pack',
                monthly_installments: 3,
                card: 'tok_test_visa_4242',
                details: {
                    email: 'logan@x-men.org'
                }
            }, function(res) {
                charge = res.id;
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('create with oxxo', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                currency: 'MXN',
                amount: amount,
                description: 'Stogies',
                reference_id: '9839-wolf_pack',
                cash: {
                    type: 'oxxo'
                },
                details: {
                    name: 'Wolverine',
                    email: 'logan@x-men.org',
                    phone: '403-342-0642'
                }
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('create with spei', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                currency:'MXN',
                amount: amount,
                description: 'Stogies',
                reference_id: '9839-wolf_pack',
                bank: {
                    type: 'spei'
                },
                details: {
                    name: 'Wolverine',
                    email: 'logan@x-men.org',
                    phone: '403-342-0642'
                }
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });
    
    describe('find', function() {
        it('should return object with same id sent before', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.find(charge, function(res) {
                assert(res.id == charge, true);
                done();
            });
        });
    });

    describe('where', function() {
        it('should return array', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.where({
                'status.ne': 'paid'
            }, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });

    describe('refund', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.refund(charge, {
                amount: 20000
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });
    
    describe('capture', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = API_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.capture(chargeCapture, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });
    
});

describe('Plan', function() {

    describe('create', function() {
        it('should return instance object with id', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Plan.create({
                id: plan,
                name: 'Gold Plan',
                amount: 10000,
                currency: 'MXN',
                interval: 'month',
                frequency: 1,
                trial_period_days: 15,
                expiry_count: 12
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });
    
    describe('update', function() {
        it('should return instance object with id', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Plan.update(plan, {
                name: 'Gold Plan',
                amount: 10000,
                currency: 'MXN',
                interval: 'month',
                frequency: 1,
                trial_period_days: 15,
                expiry_count: 12
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('where', function() {
        it('should return array', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Plan.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Plan.find(plan, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('delete', function() {
        it('should return instance object with id', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Plan.delete(plan, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });
    
});

describe('Event', function() {
    describe('where', function() {
        it('should return array', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Event.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });
});

describe('Customer', function() {
    
    describe('create', function() {
        it('should return an object instance with id', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555',
                cards: ['tok_test_visa_4242'],
                plan: 'gold-plan'
            }, function(res) {
                customer = res.id;
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });
    
    describe('update', function() {
        it('should return an object instance with id', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.update(customer, {
                name: 'Logan',
                email: 'logan@x-men.org'
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('where', function() {
        it('should return an array', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.find(customer, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('createcard', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.createCard(customer, {
                token: 'tok_test_visa_4242'
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('createsubscription', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.createSubscription(customer, {
               plan: 'gold-plan'
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('delete', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.delete(customer, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

});

describe('Card', function() {

    describe('update', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555',
                cards: ['tok_test_visa_4242'],
                plan: 'gold-plan'
            }, function(customerRes) {
                conekta.Customer.createCard(customerRes.id, {
                    token: 'tok_test_visa_4242'
                }, function(cardRes) {
                    conekta.Card.update(customerRes.id, cardRes.id, {
                        token: 'tok_test_visa_4242'
                    }, function(res) {
                        assert(res.hasOwnProperty('id'), true);
                        done();
                    });
                });
            });
        });
    });

    describe('delete', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555',
                cards: ['tok_test_visa_4242'],
                plan: 'gold-plan'
            }, function(customerRes) {
                conekta.Customer.createCard(customerRes.id, {
                    token: 'tok_test_visa_4242'
                }, function(cardRes) {
                    conekta.Card.delete(customerRes.id, cardRes.id, function(res) {
                        assert(res.hasOwnProperty('id'), true);
                        done();
                    });
                });
            });
        });
    });

});

describe('Subscription', function() {

    var customerSubscribed = '';

    describe('update', function() {
        it('should return an object instance with id attribute', function() {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555',
                cards: ['tok_test_visa_4242'],
                plan: 'gold-plan'
            }, function(customerRes) {
                customerSubscribed = customerRes.id;
                conekta.Subscription.update(customerSubscribed, {
                    plan: 'opal-plan'
                }, function(res) {
                    assert(res.hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('pause', function() {
        it('should return and object instance with id attribute', function() {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Subscription.pause(customerSubscribed, function(res) {
                assert(res.status == 'paused', true);
                done();
            });
        });
    });

    describe('resume', function() {
        it('should return and object instance with id attribute', function() {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Subscription.resume(customerSubscribed, function(res) {
                assert(res.status == 'active', true);
                done();
            });
        });
    });

    describe('cancel', function() {
        it('should return and object instance with id attribute', function() {
            this.timeout(60000);
            conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
            conekta.locale = 'es';
            conekta.Subscription.cancel(customerSubscribed, function(res) {
                assert(res.status == 'canceled', true);
                done();
            });
        });
    });

});
