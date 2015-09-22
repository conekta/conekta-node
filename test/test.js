var assert = require('assert'),
    conekta = require('../lib/conekta.js'),
    base64 = require('../lib/base64.js');

const LOCALE = 'en',
    TEST_KEY = 'key_eYvWV7gSDkNYXsmr',
    PRODUCTION_KEY = '9YxqfRnx4sMQDnRsqdYn';

describe('Conekta wrapper', function() {
    
    describe('with api key empty', function() {
        it('should return error code api_key_required', function(done) {
            conekta.api_version = '0.0.3'
            conekta.Charge.create({
                description: 'Stogies',
                amount: 50000,
                currency: 'MXN',
                reference_id: '9839-wolf_pack',
                card: 'tok_test_visa_4242',
                details: {
                    email: 'logan@x-men.org'
                }
            }, function(err) {
                assert(err.code == 'api_key_required', true);
                done();
            });
        });
    });
    
    describe('charge with production key and test card', function() {
        it('should return error code processing_error', function(done) {
            this.timeout(60000);
            conekta.api_key = PRODUCTION_KEY;
            conekta.api_version = '1.0.0'
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
            }, function(err) {
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
            }, function(err) {
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
            }, function(err) {
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
            conekta.Charge.find('123', function(err) {
                assert(err.http_code == 404, true);
                done();
            });
        });
    });

});

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
            }, function(err, res) {
                chargeCapture = res.toObject().id;
                assert(res.toObject().hasOwnProperty('id'), true);
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
            }, function(err, res) {
                charge = res.toObject().id;
                assert(res.toObject().hasOwnProperty('id'), true);
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
            }, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
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
            }, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return object with same id sent before', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.find(chargeCapture, function(err, res) {
                assert(res.toObject().id == chargeCapture, true);
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
            }, function(err, res) {
                assert(res.toArray() instanceof Array, true);
                done();
            });
        });
    });

    describe('refund', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.find(charge, function(err, res) {
                res.refund({}, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('capture', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Charge.find(chargeCapture, function(err, res) {
                res.capture(function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

});

describe('Plan', function() {

    var plan = 'jul1-plan';

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
            }, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('update', function() {
        it('should return instance object with id', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Plan.find(plan, function(err, res) {
                res.update({
                    name: 'Gold Plan',
                    amount: 10000,
                    currency: 'MXN',
                    interval: 'month',
                    frequency: 1,
                    trial_period_days: 15,
                    expiry_count: 12
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('where', function() {
        it('should return array', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Plan.where({}, function(err, res) {
                assert(res.toArray() instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Plan.find(plan, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('delete', function() {
        it('should return instance object with id', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Plan.find(plan, function(err, res) {
                res.delete(function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
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
            conekta.Event.where({}, function(err, res) {
                assert(res.toArray() instanceof Array, true);
                done();
            });
        });
    });
});

describe('Customer', function() {
    
    var customer = '';

    describe('create without plan', function() {
        it('should return an object instance with id', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555',
                cards: ['tok_test_visa_4242']
            }, function(err, res) {
                res = res.toObject();
                customer = res.id;
                assert(res.hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('cards id', function() {
        it('should be different', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555',
                cards: ['tok_test_amex_0005', 'tok_test_mastercard_4444']
            }, function(err, customer) {
                assert(customer.cards[0]._id != customer.cards[1]._id, true);
                done();
            });
        });
    })
    
    describe('create without plan and cards', function() {
        it('should return an object instance with id', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555'
            }, function(err, res) {
                res = res.toObject();
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
            conekta.Customer.find(customer, function(err, res) {
                res.update({
                    name: 'Logan',
                    email: 'logan@x-men.org'
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('where', function() {
        it('should return an array', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.where({}, function(err, res) {
                assert(res.toArray() instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.find(customer, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('createcard', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.find(customer, function(err, res) {
                res.createCard({
                    token: 'tok_test_visa_4242'
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('createsubscription', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.find(customer, function(err, res) {
                res.createSubscription({
                    plan: 'gold-plan'
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('delete', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.find(customer, function(err, res) {
                res.delete(function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
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
            }, function(err, customer) {
                customer.find(customer._id, function(err, customerObj) {
                    customerObj.cards[0].update({
                        token: 'tok_test_visa_4242'
                    }, function(err, res) {
                        assert(res.toObject().hasOwnProperty('id'), true);
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
            }, function(err, customer) {
                customer.find(customer._id, function(err, customerObj) {
                    customerObj.cards[0].delete(function(err, res) {
                        assert(res.toObject().hasOwnProperty('id'), true);
                        done();
                    });
                });
            });
        });
    });

    describe('create two cards, then delete one of them', function() {
        it('should be different by one', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.create({
                name:'James Howlett',
                email:'james.howlett@forces.gov',
                phone:'55-5555-5555',
                cards: ['tok_test_visa_4242'],
                plan: 'gold-plan'
            }, function(err, customer) {
                customer.createCard({
                    token: 'tok_test_visa_4242'
                }, function() {
                    cards_amount = customer.cards.length;
                    customer.cards[0].delete(function(err, res) {
                        conekta.Customer.find(customer._id, function(err, _customer) {
                            assert(cards_amount - 1 == _customer.cards.length, true);
                            done();
                        })
                    });
                })
            });
        });
    });

});

describe('Subscription', function() {
    
    var customerSubscribed = '';
    
    describe('update subscription plan', function() {
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
            }, function(err, customer) {
                customerSubscribed = customer;
                customerSubscribed.subscription.update({
                    plan: 'opal-plan'
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });
    
    describe('update subscription card', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Customer.create({
                name:'James Howlett',
                email:'willy@wonka.shop',
                phone:'55-5555-5555',
                cards: ['tok_test_amex_0005', 'tok_test_mastercard_4444'],
                plan: 'gold-plan'
            }, function(err, customer) {
                customer.subscription.update({
                    plan: 'opal-plan',
                    card_id: customer.toObject().cards[1].id
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
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
            customerSubscribed.subscription.pause(function(err, res) {
                assert((res.toObject().status == 'paused' ||res.toObject().status == 'in_trial'), true);
                done();
            });
        });
    });

    describe('resume', function() {
        it('should return and object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            customerSubscribed.subscription.resume(function(err, res) {
                assert((res.toObject().status == 'active' ||res.toObject().status == 'in_trial'), true);
                done();
            });
        });
    });

    describe('cancel', function() {
        it('should return and object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            customerSubscribed.subscription.cancel(function(err, res) {
                assert(res.toObject().status == 'canceled', true);
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
            }, function(err, res) {
                payee = res._id;
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.find(payee, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });

    describe('where', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.where({}, function(err, res) {
                assert(res.toArray() instanceof Array, true);
                done();
            });
        });
    });

    describe('update', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.find(payee, function(err, res) {
                res.update({
                   name: 'Willy Wonka'
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('createPayoutMethod', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.Payee.find(payee, function(err, res) {
                res.createPayoutMethod({
                    type: 'bank_transfer_payout_method',
                    account_number: '002320074024662727',
                    account_holder: 'James Howlett'
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

    describe('delete', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.find(payee, function(err, res) {
                res.delete(function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

});

describe('Payout', function() {

    var payoutId = '';

    describe('create', function() {
        it('should return an object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.create({
                name: 'James Howlett',
                email: 'james.howlett@forces.gov',
                phone: '55-5555-5555'
            }, function(err, res) {
                conekta.Payout.create({
                    payee: res._id,
                    currency: 'MXN',
                    amount: 50000
                }, function(err, payout) {
                    payoutId = payout._id;
                    assert(res.toObject().hasOwnProperty('id'), true);
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
            conekta.Payout.where({}, function(err, res) {
                assert(res.toArray() instanceof Array, true);
                done();
            });
        });
    });

    describe('find', function() {
        it('should return an object instance with id attribute', function(done) {
           this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payout.find(payoutId, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });

});

describe('PayoutMethod', function() {

    var payeeId = '';

    describe('update', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Payee.create({
                name: 'James Howlett',
                email: 'james.howlett@forces.gov',
                phone: '55-5555-5555'
            }, function(err, res) {
                payeeId = res._id;
                res.createPayoutMethod({
                    type: 'bank_transfer_payout_method',
                    account_number: '002320074024662727',
                    account_holder: 'James Howlett'
                }, function(err, methodRes) {
                    methodRes.update({
                        account_holder: 'Juan Mendez'
                    }, function(err, res) {
                        assert(res.toObject().hasOwnProperty('id'), true);
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
            conekta.Payee.find(payeeId, function(err, payee) {
                payee.payout_methods[0].delete(function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });

});

describe('Webhook', function() {

    var webhook = '';

    describe('create', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Webhook.create({
                url: 'http://localhost:3000/my_listener',
                events: ["charge.created", "charge.paid", "charge.under_fraud_review",
                    "charge.fraudulent", "charge.refunded", "charge.created", "customer.created",
                    "customer.updated", "customer.deleted", "webhook.created", "webhook.updated",
                    "webhook.deleted", "charge.chargeback.created", "charge.chargeback.updated",
                    "charge.chargeback.under_review", "charge.chargeback.lost", "charge.chargeback.won",
                    "payout.created", "payout.retrying", "payout.paid_out", "payout.failed",
                    "plan.created", "plan.updated", "plan.deleted", "subscription.created",
                    "subscription.paused", "subscription.resumed", "subscription.canceled",
                    "subscription.expired", "subscription.updated", "subscription.paid",
                    "subscription.payment_failed", "payee.created", "payee.updated",
                    "payee.deleted", "payee.payout_method.created",
                    "payee.payout_method.updated", "payee.payout_method.deleted"]
            }, function(err, res) {
                webhook = res._id;
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });
    describe('find', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Webhook.find(webhook, function(err, res) {
                assert(res.toObject().hasOwnProperty('id'), true);
                done();
            });
        });
    });
    describe('update', function() {
        it('should return object instance with id attribute', function(done) {
            this.timeout(60000);
            conekta.api_key = TEST_KEY;
            conekta.locale = LOCALE;
            conekta.Webhook.find(webhook, function(err, webhook) {
                webhook.update({
                    url: 'http://localhost:2000/my_listener'
                }, function(err, res) {
                    assert(res.toObject().hasOwnProperty('id'), true);
                    done();
                });
            });
        });
    });
});

describe('Base64Encode', function() {

    // Tests basic functionality.
    it('should encode basic strings and Buffers', function() {
        var tests = [
            {input: "", output: ""},
            {input: "f", output: "Zg=="},
            {input: "fo", output: "Zm8="},
            {input: "foo", output: "Zm9v"},
            {input: "foob", output: "Zm9vYg=="},
            {input: "fooba", output: "Zm9vYmE="},
            {input: "foobar", output: "Zm9vYmFy"}
        ];
        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];
            assert.equal(test.output, base64.encode(test.input))
            assert.equal(test.output, base64.encode(new Buffer(test.input, 'ascii')));
        }
    });

    // Tests advanced functionality with utf8 encoding.
    it('should encode unicode strings', function() {
        var input = '\xA9',
            output1 = base64.encode(input),
            binInput = new Buffer([0xC2, 0xA9]),
            output2 = base64.encode(binInput);

        // Binary utf8 and string data should match base64 encoding
        assert.equal(output1, "wqk=", "unicode values as strings should be encoded correctly");
        assert.equal(output2, "wqk=", "unicode buffers should be encoding correctly");
    });

    // Test that base64.encode actually throws when it is passed a bad data type.
    it('should throw when passed bad inputs', function() {
        var didThrow = function(wrapFn) {
            try {
                wrapFn();
            } catch (e) {
                return true;
            }
            return false;
        };

        assert(didThrow(function() {
            base64.encode();
        }));
        assert(didThrow(function() {
            base64.encode(1);
        }));
        assert(didThrow(function() {
            base64.encode(false);
        }));
        assert(didThrow(function() {
            base64.encode(null);
        }));
    });
});
