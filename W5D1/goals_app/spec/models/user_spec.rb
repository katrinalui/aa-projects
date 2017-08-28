require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryGirl.build(:user)
  end

  describe "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  it "generates a password digest when password is given" do
    expect(user.password_digest).to_not be_nil
  end

  it "generates a session token before validation" do
    expect(user.session_token).to_not be_nil
  end

  describe "::find_by_credentials" do
    before { user.save! }

    it "returns user given valid credentials" do
      expect(User.find_by_credentials("tester", "password")).to eq(user)
    end

    it "returns nil given invalid credentials" do
      expect(User.find_by_credentials("tester", "badpassword")).to eq(nil)
    end
  end

  describe "#reset_session_token!" do
    it "sets a new session token for the user" do
      user.valid?
      old_token = user.session_token
      user.reset_session_token!

      expect(user.session_token).to_not eq(old_token)
    end

    it "returns the new session token" do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end
end
