var assert = require('assert'),
    conekta = require('../lib/conekta.js');

const LOCALE = 'en',
    TEST_KEY = 'key_eYvWV7gSDkNYXsmr',
    PRODUCTION_KEY = '9YxqfRnx4sMQDnRsqdYn';

describe('Conekta wrapper', function() {

    describe('with api key empty', function() {
        it('should return error code api_key_required', function(done) {
            conekta.Charge.create({
                description: 'Stogies',
                amount: 50000,
                currency: 'MXN',
                reference_id: '9839-wolf_pack',
                card: 'tok_test_visa_4242',
                details: {
                    email: 'logan@x-men.org'
                }
            }, null, function(err) {
                assert(err.code == 'api_key_required', true);
                done();
            });
        });
    });

    describe('charge with production key and test card', function() {
        it('should return error code processing_error', function(done) {
            this.timeout(60000);
            conekta.api_key = PRODUCTION_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                description: 'Stogies',
                amount: 50000,
                currency: 'MXN',
                reference_id: '9839-wolf_pack',
                card: 'tok_test_visa_4242',
                details: {
                    email: 'logan@x-men.org'
                }
            }, null, function(err) {
                assert(err.code == 'processing_error', true);
                done();
            });
        });
    });

    describe('request with bad arguments', function() {
        it('should return error code with empty argument', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                description: 'Stogies',
                currency: 'MXN',
                reference_id: '9839-wolf_pack',
                card: 'tok_test_visa_4242',
                details: {
                    email: 'logan@x-men.org'
                }
            }, null, function(err) {
                assert(err.code == 'invalid_amount', true);
                done();
            });
        });
    });

    describe('request with errors', function() {
        it('should return message_to_purchaser on error response', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                description: 'Stogies',
                currency: 'MXN',
                reference_id: '9839-wolf_pack',
                card: 'tok_test_visa_4242',
                details: {
                    email: 'logan@x-men.org'
                }
            }, null, function(err) {
                assert(err.hasOwnProperty('message_to_purchaser'), true);
                done();
            });
        });
    });

    describe('request with not found object', function() {
        it('should return error with http_code 404', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.find('123', null, function(err) {
                assert(err.http_code == 404, true);
                done();
            });
        });
    });

});

//Validate not found

describe('Charge', function() {

    var charge = '',
        chargeCapture = '';

    describe('create with card', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                description: 'Stogies',
                amount: 50000,
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                description: 'Stogies',
                amount: 50000,
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                currency: 'MXN',
                amount: 50000,
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.create({
                currency:'MXN',
                amount: 50000,
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
            conekta.api_key = TEST_KEY;
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
            conekta.api_key = TEST_KEY;
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
            conekta.api_key = TEST_KEY;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.capture(chargeCapture, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });
    
});

describe('Plan', function() {

    var plan = 'jul0-plan';

    describe('create', function() {
        it('should return instance object with id', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Plan.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Plan.find(plan, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('delete', function() {
        it('should return instance object with id', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Event.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });
});

describe('Customer', function() {
    
    var customer = '';

    describe('create', function() {
        it('should return an object instance with id', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.find(customer, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('createcard', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
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
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.create({
                name:'James Howlett',
                email:'willy@wonka.shop',
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
        it('should return and object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Subscription.pause(customerSubscribed, function(res) {
                assert((res.status == 'paused' || res.status == 'in_trial'), true);
                done();
            });
        });
    });
    
    describe('resume', function() {
        it('should return and object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Subscription.resume(customerSubscribed, function(res) {
                assert((res.status == 'active' || res.status == 'in_trial'), true);
                done();
            });
        });
    });
    
    describe('cancel', function() {
        it('should return and object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Subscription.cancel(customerSubscribed, function(res) {
                assert(res.status == 'canceled', true);
                done();
            });
        });
    });
    
});

describe('Payee', function() {

    var payee = '';

    describe('create', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.create({
                name: 'James Howlett',
                email: 'james.howlett@forces.gov',
                phone: '55-5555-5555'
            }, function(res) {
                payee = res.id;
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.find(payee, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('where', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });

    describe('update', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.update(payee, {
               name: 'Willy Wonka'
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('createPayoutMethod', function() {
        it('should return object instance with id attribute', function(done) {
            conekta.Payee.createPayoutMethod(payee, {
                type: 'bank_transfer_payout_method',
                account_number: '002910902431856527',
                account_holder: 'James Howlett'
            }, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('delete', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.delete(payee, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

});

describe('Payout', function() {

    var payeeId = '',
        payoutId = '';

    describe('create', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.create({
                name: 'James Howlett',
                email: 'james.howlett@forces.gov',
                phone: '55-5555-5555'
            }, function(res) {
                payeeId = res.id;
                conekta.Payout.create({
                    payee: payeeId,
                    currency: 'MXN',
                    amount: 50000
                }, function(res) {
                    payoutId = res.id;
                    assert(res.hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('where', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payout.where({}, function(res) {
                assert(res instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return an object instance with id attribute', function(done) {
           this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payout.find(payoutId, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

});

describe('PayoutMethod', function() {

    var payeeId = '',
        payoutMethod = '';

    describe('update', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.create({
                name: 'James Howlett',
                email: 'james.howlett@forces.gov',
                phone: '55-5555-5555'
            }, function(res) {
                payeeId = res.id;
                conekta.Payee.createPayoutMethod(payeeId, {
                    type: 'bank_transfer_payout_method',
                    account_number: '002910902431856527',
                    account_holder: 'James Howlett'
                }, function(methodRes) {
                    payoutMethod = methodRes.id;
                    conekta.PayoutMethod.update(payeeId, payoutMethod, {
                        account_holder: 'Juan Mendez'
                    }, function(res) {
                        assert(res.hasOwnProperty('id'), true);
                        done();
                    });
                });
            });
        });
    });

    describe('delete', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.PayoutMethod.delete(payeeId, payoutMethod, function(res) {
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

});
